
        document.addEventListener('DOMContentLoaded', () => {
            const audio = document.getElementById('background-music');
        
            // Enable autoplay and loop
            audio.loop = true; // Ensures the audio loops
            audio.volume = 0.25; // Set volume to 50%
        
            // Try playing automatically
            audio.play().catch(() => {
                // If autoplay is blocked, wait for user interaction
                document.body.addEventListener('click', () => {
                    audio.play();
                }, { once: true });
            });
        });
        
