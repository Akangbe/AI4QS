const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-primary/15 to-violet-600/20 animate-gradient" />
      <div className="absolute inset-0 opacity-25">
        <div 
          className="absolute h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" 
          style={{ top: '15%', left: '10%' }}
        />
        <div 
          className="absolute h-64 w-64 rounded-full bg-purple-500/30 blur-3xl animate-blob" 
          style={{ 
            top: '20%', 
            right: '15%', 
            animationDelay: '2s',
            animationDuration: '8s'
          }}
        />
        <div 
          className="absolute h-56 w-56 rounded-full bg-violet-600/30 blur-3xl animate-blob"
          style={{ 
            bottom: '15%', 
            left: '25%',
            animationDelay: '4s',
            animationDuration: '10s'
          }}
        />
        <div 
          className="absolute h-40 w-40 rounded-full bg-blue-400/20 blur-3xl animate-blob"
          style={{ 
            bottom: '25%', 
            right: '20%',
            animationDelay: '3s',
            animationDuration: '9s'
          }}
        />
      </div>
      <div 
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNmZmZmZmYwNSIgZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTItN2g0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bTItMmgxdjFoLTF2LTF6Ii8+PC9nPjwvc3ZnPg==')] opacity-10"
      />
    </div>
  );
};

export default AnimatedBackground;
