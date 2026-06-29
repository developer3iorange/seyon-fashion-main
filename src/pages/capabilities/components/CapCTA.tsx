import { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const certLogos = [
  { name: 'GOTS', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/b43d9a33-c5f9-4f83-bd89-d98ecd25268f_GOTS.png?v=651cb023af19da98d69f671b7fa7720d' },
  { name: 'OCS 100', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/35b97cfd-e6a3-485f-b956-2e8877b10520_organic-100-content-standard-logo-png_seeklogo-343925.webp?v=171958ad205064252607910ef897fc4b' },
  { name: 'GRS', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/6c5dfd8d-e761-4758-be6e-b0db2b556ddb_GRS-certificate.webp?v=d1d9d142e87f92d79e34d219bf61ae17' },
  { name: 'Sedex', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/d71ddf99-bd84-4ba6-8687-9608be174be9_Sedex.png?v=b8ffce25e2f70fe659ee59518299a177' },
  { name: 'ZDHC', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/70ed40de-5722-4e87-bcec-5c3114c44160_ZDHC.png?v=3314a3836ae014849c23292de20db3ab' },
  { name: 'Higg Index', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ca7473f1-e521-469f-a57a-49afab43480f_higg-index-logo-vector-1.png?v=3017f14927d8fa071d13ff89e846214e' },
  { name: 'Walt Disney FMS', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/ce2b796b-48e7-491f-b45f-7878790dc9fc_Walt-Dinesy-FMS.png?v=4f4a9c8ac6bf413348b4fc4cf662b5ae' },
  { name: 'Better Cotton', src: 'https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/8c8463eb-d6ba-4f14-a476-4346b100e71e_Better_Cotton_Initiative_logo.svg?v=1d1542448314bc8dd5b78e0e10e9b692' },
];

const CapCTA = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.unobserve(el); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 lg:py-32"
      style={{ background: 'var(--c-bg)', transition: 'background 0.4s ease' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up ${visible ? 'visible' : ''}`}>
          {/* Left */}
          <div>
            <div className="gold-divider mb-6" />
            <h2
              className="mb-6 leading-tight"
              style={{
                fontFamily: 'Plus Jakarta Sans, sans-serif',
                fontSize: 'clamp(28px, 3.5vw, 48px)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--c-text)',
              }}
            >
              Built for Global Compliance
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-10"
              style={{ color: 'var(--c-text-muted)', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '420px' }}
            >
              Our certifications meet the strictest sourcing requirements of EU, US, and Australian
              retailers. Every shipment comes with complete documentation.
            </p>

            {/* Cert logos — no tabs, just logos */}
            <div className="grid grid-cols-4 gap-5 mb-10">
              {certLogos.map((cert) => (
                <div
                  key={cert.name}
                  className="flex items-center justify-center rounded-lg p-2"
                  style={{ height: '56px', border: '1px solid var(--c-border)' }}
                  title={cert.name}
                >
                  <img
                    src={cert.src}
                    alt={cert.name}
                    className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-200"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-gold">
                Request a Quote
                <i className="ri-arrow-right-up-line" />
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{ height: '400px', border: '1px solid var(--c-border)' }}
          >
            <img
              src="https://storage.readdy-site.link/project_files/014fcefb-cb0a-425a-a53e-23ab2e007684/200bd5ac-3c64-4ef9-b35b-76f556b7b346_Global-Compliance.webp"
              alt="Global compliance certifications"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapCTA;
