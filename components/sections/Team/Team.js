import styles from "./Team.module.css";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "James Adekunle",
      role: "Founder & CEO",
      experience: "20+ years",
      specialization: "Structural Engineering",
      image: "👨‍💼",
      description:
        "With over two decades in construction, James leads our company with vision and expertise.",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      role: "Head of Operations",
      experience: "15+ years",
      specialization: "Project Management",
      image: "👩‍💼",
      description:
        "Sarah ensures every project runs smoothly from start to finish with precision.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Lead Architect",
      experience: "12+ years",
      specialization: "Architectural Design",
      image: "👨‍🎨",
      description:
        "Michael combines aesthetic vision with practical construction solutions.",
    },
    {
      id: 4,
      name: "Amina Bello",
      role: "Senior Project Manager",
      experience: "10+ years",
      specialization: "Residential Projects",
      image: "👩‍🔧",
      description:
        "Amina oversees our residential projects with exceptional attention to detail.",
    },
    {
      id: 5,
      name: "David Okoro",
      role: "Construction Manager",
      experience: "18+ years",
      specialization: "Commercial Construction",
      image: "👷‍♂️",
      description:
        "David brings extensive experience in large-scale commercial construction projects.",
    },
    {
      id: 6,
      name: "Grace Williams",
      role: "Quality Assurance",
      experience: "8+ years",
      specialization: "Quality Control",
      image: "👩‍🏭",
      description:
        "Grace ensures every project meets our rigorous quality standards and specifications.",
    },
  ];

  return (
    <section id="team" className={`section ${styles.team}`}>
      <div className="container">
        <div className={styles.teamHeader}>
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-subtitle">
            Our team of certified professionals brings decades of combined
            experience in roofing, construction, and project management to
            deliver exceptional results.
          </p>
        </div>

        <div className={styles.teamGrid}>
          {teamMembers.map((member) => (
            <div key={member.id} className={styles.teamCard}>
              <div className={styles.memberImage}>
                <div className={styles.imagePlaceholder}>{member.image}</div>
              </div>
              <div className={styles.memberInfo}>
                <h3 className={styles.memberName}>{member.name}</h3>
                <div className={styles.memberRole}>{member.role}</div>
                <div className={styles.memberMeta}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Experience:</span>
                    <span className={styles.metaValue}>
                      {member.experience}
                    </span>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaLabel}>Specialization:</span>
                    <span className={styles.metaValue}>
                      {member.specialization}
                    </span>
                  </div>
                </div>
                <p className={styles.memberDescription}>{member.description}</p>
                <div className={styles.memberContact}>
                  <button className={styles.contactButton}>Contact</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.teamCta}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>Join Our Team</h3>
            <p className={styles.ctaDescription}>
              We're always looking for talented professionals to join our
              growing team.
            </p>
          </div>
          <button className={styles.ctaButton}>View Careers</button>
        </div>
      </div>
    </section>
  );
};

export default Team;
