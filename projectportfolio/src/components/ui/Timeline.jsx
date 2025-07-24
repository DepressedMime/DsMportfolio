import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Timeline.css';

const experiences = [
  {
    title: 'Customer Service Representative',
    place: 'IBEX Global Solutions',
    year: 'July 2021 – March 2022',
    description: 'Handled inbound calls, assisted customers with billing and technical concerns, and maintained high satisfaction scores.'
  },
  {
    title: 'IT Support Specialist',
    place: 'FJL Construction',
    year: 'June 2022 – July 2024',
    description: 'Provided desktop support, network setup, hardware troubleshooting, and software maintenance across multiple departments.'
  },
  {
    title: 'Freelancer',
    place: 'Photoshop / Premiere Pro / Web Design',
    year: 'Present',
    description: 'Created graphic designs and video edits for online content creators, small businesses, and personal projects.'
  }
];


const education = [
    {
    title: 'Bachelor of Medical Technology',
    place: 'Holy Name University',
    year: 'TBA',
    // description: 'Studying core IT subjects including programming, system analysis, multimedia editing, and network administration.'
  },
  {
    title: 'Bachelor of Information Technology',
    place: 'Crystal E. College',
    year: '2025',
    // description: 'Studying core IT subjects including programming, system analysis, multimedia editing, and network administration.'
  }
];

const fadeInVariant = (direction = 'up', delay = 0) => ({
  hidden: {
    opacity: 0,
    y: direction === 'up' ? 30 : -30,
    x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      duration: 0.6,
      delay
    }
  }
});

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('experience');

  const renderItems = (items) => (
    <div className="timeline-container">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeInVariant(index % 2 === 0 ? 'left' : 'right', index * 0.2)}
        >
          <div className="timeline-content">
            <h3>{item.title}</h3>
            <span className="place">{item.place}</span>
            <span className="year">{item.year}</span>
            {item.description && <p>{item.description}</p>}
          </div>
        </motion.div>
      ))}
      <motion.div
        className="timeline-line"
        initial={{ height: 0 }}
        whileInView={{ height: '100%' }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        viewport={{ once: true }}
      />
    </div>
  );

  return (
    <section id="timeline-section">
      <motion.h2
        className="timeline-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Timeline
      </motion.h2>

      <motion.div
        className="timeline-tabs"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() => setActiveTab('experience')}
          className={activeTab === 'experience' ? 'active' : ''}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab('education')}
          className={activeTab === 'education' ? 'active' : ''}
        >
          Education
        </button>
      </motion.div>

      {activeTab === 'experience' ? renderItems(experiences) : renderItems(education)}
    </section>
  );
}
