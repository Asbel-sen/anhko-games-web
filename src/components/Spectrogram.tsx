const Spectrogram = () => {
  const bars = 48;
  
  return (
    <div className="flex items-end justify-center gap-1 h-32 w-full max-w-3xl mx-auto opacity-60">
      {[...Array(bars)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-gradient-to-t from-primary via-secondary to-accent rounded-t-sm spectrogram-bar"
          style={{
            animationDelay: `${i * 0.08}s`,
            height: '20%',
          }}
        />
      ))}
    </div>
  );
};

export default Spectrogram;
