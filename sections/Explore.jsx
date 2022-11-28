'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TypingText, ExploreCard, TitleText } from '../components';
import { staggerContainer } from '../utils/motion';
import styles from '../styles';

import { exploreWorlds } from '../constants';

const Explore = () => (
  <section className={`${styles.paddings}`} id="explore">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}

    >
      <TypingText title="| The world" textStyles="text-center" />
      <TitleText title={<>Chose the world you want <br className="md:block hidden" /> to explore </>} textStyles="text-center" />
    </motion.div>
    Explore section
  </section>
);

export default Explore;
