const Spectrogram = () => {
  const bars = 64;
  
  return (
    <div className="flex items-end justify-center gap-0.5 h-48 w-full opacity-30">
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-primary via-secondary to-accent spectrogram-bar"
          style={{
            animationDelay: `${i * 0.06}s`,
            height: '20%',
          }}
        />
      ))}
    </div>
  );
};

export default Spectrogram;
