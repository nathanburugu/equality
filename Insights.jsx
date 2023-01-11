/** @format */

'use client';

import { motion } from 'framer-motion';
import { TypingText, TitleText, NewFeatures, InsightCard } from '../components';
import styles from '../styles';
import { staggerContainer, fadeIn, planetVariants } from '../utils/motion';
import { insights } from '../constants/index';

const Insights = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: false,
        amount: 0.25,
      }}
      className={`${styles.innerWidth} mx-auto flex  flex-col gap-8`}
    >
      <TypingText title="| Insights" textStyles="text-center" />
      <TitleText title="Insight About Metaverse" textStyles="text-center" />
      <div className="mt-[50px] flex flex-col gap-[30px]">
        {insights.map((insight, index) => (
          <InsightCard
            key={`insight-${index}`}
            {...insight}
            index={index + 1}
          />
        ))}
      </div>
    </motion.div>
  </section>
);

export default Insights;
