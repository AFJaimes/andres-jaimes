import { FunctionComponent, useRef, useEffect } from "react";
import { useLanguage } from "contexts/LanguageContext";
import experience from "data/experience.json";
import css from "./Experience.module.scss";
import Header from "./Header/Header";
import Job from "./Job/Job";
import TimelineIcon from "./TimelineIcon/TimelineIcon";
import useWindowSize from "hooks/useWindowSize";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import { gsap } from "gsap";

const companyKeyMap: Record<string, string> = {
  "BairesDev": "bairesdev",
  "HUGE INC.": "huge",
  "FINCARAIZ.COM.CO": "fincaraiz",
  "ISMOCOL S.A": "ismocol",
  "BUCARAMANGA CITY HALL": "bucaramanga",
  "IMAGENGROUP": "imagengroup",
};

const Experience: FunctionComponent = () => {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const jobRefs = useRef<(HTMLDivElement | null)[]>([]);
  const hasAnimatedRef = useRef<boolean[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      jobRefs.current.forEach((ref) => {
        if (ref) {
          ref.style.opacity = "1";
          ref.style.transform = "translateY(0)";
        }
      });
      return;
    }

    const observers: IntersectionObserver[] = [];

    jobRefs.current.forEach((ref, index) => {
      if (!ref || hasAnimatedRef.current[index]) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !hasAnimatedRef.current[index]) {
              hasAnimatedRef.current[index] = true;
              
              gsap.fromTo(
                ref,
                {
                  opacity: 0,
                  y: -30,
                },
                {
                  opacity: 1,
                  y: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  delay: index * 0.1,
                }
              );

              observer.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );

      observer.observe(ref);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <section className={css.root} aria-labelledby="experience-heading">
      <h2 id="experience-heading" className="sr-only">{t("experience.workExperience")}</h2>
      <section className={css.container}>
        {experience.map((job, index) => {
          const companyKey = companyKeyMap[job.companyName] || "";
          const translatedJobTitle = companyKey ? t(`experience.jobs.${companyKey}.jobTitle`) : job.jobTitle;
          const translatedDescription = companyKey ? t(`experience.jobs.${companyKey}.description`) : job.jobDescription;
          const finalDate = job.finalDate === "TODAY" ? t("experience.today") : job.finalDate;

          return (
            <div
              key={index}
              ref={(el) => {
                jobRefs.current[index] = el;
              }}
              className={css.jobContainer}
              style={{ opacity: 0 }}
            >
              <div className={css.header}>
                <Header
                  initialDate={job.initialDate}
                  finalDate={finalDate}
                  job={translatedJobTitle}
                />
              </div>
              {width > 650 && (
                <div className={css.icon}>
                  <TimelineIcon
                    icon={job.iconPath}
                    last={index === experience.length - 1}
                  />
                </div>
              )}
              <div className={css.job}>
                <Job
                  description={translatedDescription}
                  jobTitle={job.companyName}
                />
              </div>
              {width <= 650 && index !== experience.length - 1 && (
                <span className={css.downArrow}>
                  <ArrowDownward />
                </span>
              )}
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default Experience;
