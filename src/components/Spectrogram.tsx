const Spectrogram = () => {
  const bars = 32;
  
  return (
    <div className="flex items-end justify-center gap-1 h-24 opacity-60">
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className="w-2 bg-gradient-to-t from-primary via-secondary to-accent rounded-t-sm spectrogram-bar"
          style={{
            animationDelay: `${i * 0.05}s`,
            height: '20%',
          }}
        />
      ))}
    </div>
  );
};

export default Spectrogram;
