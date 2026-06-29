interface LoadingScreenProps {
  visible: boolean;
}

const LoadingScreen = ({ visible }: LoadingScreenProps) => (
  <div className={`loading-screen ${visible ? '' : 'hidden'}`}>
    <div className="flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <span
          className="text-2xl tracking-[0.25em] uppercase font-extrabold"
          style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', color: '#1A1A1A' }}
        >
          SEYON FASHIONS
        </span>
        <span
          className="text-[10px] tracking-[0.4em] uppercase font-semibold"
          style={{ color: 'var(--c-text-faint)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
        >
          EST. 1980 · TIRUPPUR, INDIA
        </span>
      </div>
      <div className="w-48 h-0.5 overflow-hidden rounded-full" style={{ background: 'rgba(0,0,0,0.08)' }}>
        <div className="h-full rounded-full loader-line" style={{ background: '#111111' }} />
      </div>
    </div>
  </div>
);

export default LoadingScreen;
