import css from "./About.module.scss";
import { FunctionComponent, useRef, useEffect } from "react";
import { useLanguage } from "contexts/LanguageContext";
import Pointer from "components/Pointer/Pointer";
import { gsap } from "gsap";

const About: FunctionComponent = () => {
  const { t } = useLanguage();
  const description = t("about.description").split("\n\n");
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const hasAnimatedRef = useRef(false);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!textRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      if (textRef.current) {
        textRef.current.style.opacity = "1";
        const animatedTextElement = textRef.current.querySelector(`.${css.animatedText}`) as HTMLElement;
        const pointerElement = textRef.current.querySelector(".pointer") as HTMLElement;
        if (animatedTextElement) {
          animatedTextElement.style.opacity = "1";
        }
        if (pointerElement) {
          pointerElement.style.opacity = "1";
        }
      }
      hasAnimatedRef.current = true;
      return;
    }

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    hasAnimatedRef.current = false;
    if (textRef.current) {
      textRef.current.style.opacity = "0";
    }
  }, [description]);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimatedRef.current) {
            hasAnimatedRef.current = true;
            animateText();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [description]);

  const animateText = () => {
    if (!textRef.current) return;

    const textElement = textRef.current;
    const animatedTextElement = textElement.querySelector(`.${css.animatedText}`) as HTMLElement;
    const pointerElement = textElement.querySelector(".pointer") as HTMLElement;
    
    if (!animatedTextElement) return;

    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    animatedTextElement.innerHTML = "";
    textElement.style.opacity = "1";

    if (pointerElement) {
      pointerElement.style.opacity = "1";
    }

    const tl = gsap.timeline();
    timelineRef.current = tl;

    const baseDelay = 0.008;
    let totalDelay = 0;

    description.forEach((paragraph, paragraphIndex) => {
      const words = paragraph.split(/(\s+)/);
      const totalWords = words.length;
      let lastWordDelay = 0;

      for (let i = 0; i < totalWords; i++) {
        const progress = i / Math.max(totalWords - 1, 1);
        const easeInOut = progress < 0.5 
          ? 2 * progress * progress 
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;
        const delayVariation = baseDelay * (0.9 + easeInOut * 0.2);
        const currentDelay = totalDelay + (i * delayVariation);
        lastWordDelay = currentDelay;
        
        tl.call(() => {
          let currentText = "";
          for (let j = 0; j <= i; j++) {
            currentText += words[j];
          }
          
          const paragraphElement = document.createElement("span");
          paragraphElement.textContent = currentText;
          
          const existingParagraph = animatedTextElement.querySelector(`[data-paragraph="${paragraphIndex}"]`);
          if (existingParagraph) {
            existingParagraph.textContent = currentText;
          } else {
            paragraphElement.setAttribute("data-paragraph", paragraphIndex.toString());
            animatedTextElement.appendChild(paragraphElement);
          }
        }, undefined, currentDelay);
      }
      
      totalDelay = lastWordDelay + baseDelay;

      if (paragraphIndex < description.length - 1) {
        const br1 = document.createElement("br");
        const br2 = document.createElement("br");
        br1.setAttribute("data-paragraph-break", paragraphIndex.toString());
        br2.setAttribute("data-paragraph-break", paragraphIndex.toString());
        
        tl.call(() => {
          const existingBr1 = animatedTextElement.querySelector(`[data-paragraph-break="${paragraphIndex}"]`);
          if (!existingBr1) {
            animatedTextElement.appendChild(br1);
            animatedTextElement.appendChild(br2);
          }
        }, undefined, totalDelay);
      }
    });

  };

  return (
    <section ref={sectionRef} className={css.root} aria-labelledby="about-heading">
      <h2 id="about-heading" className={css.header} title="about me">
        <span>const About</span>
        <span className={css.colorYellow} aria-hidden="true">{` = (`}</span>
        <span>me</span>
        <span className={css.colorYellow} aria-hidden="true">{`) `}</span>
        <span className={css.colorWhite} aria-hidden="true">{`=>`}</span>
        <span className={`${css.colorYellow} ${css.key}`} aria-hidden="true">{` {`}</span>
      </h2>
      <span className={css.colorImport} aria-hidden="true">
        <b>return (`</b>
      </span>
      <article>
        <p 
          ref={textRef} 
          className={css.description}
          aria-live="polite"
          aria-atomic="true"
        >
          <span className={css.animatedText}>
            {description.map((paragraph, index) => (
              <span key={index}>
                {paragraph}
                {index < description.length - 1 && (
                  <>
                    <br />
                    <br />
                  </>
                )}
              </span>
            ))}
          </span>
          <span className="pointer" style={{ opacity: 1 }}>
            <Pointer />
          </span>
        </p>
      </article>
      <b>
        <span className={css.colorImport}>`)</span>
        <span className={css.colorWhite}>;</span>
      </b>
      <br />
      <span className={`${css.colorYellow} ${css.key}`}>{`}`}</span>
    </section>
  );
};

export default About;
