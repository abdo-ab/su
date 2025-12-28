import { useState, useRef, useEffect } from 'react';
import { Box, Flex, IconButton, Slider } from '@radix-ui/themes';
import { PlayIcon, PauseIcon, SpeakerLoudIcon, SpeakerOffIcon, SpeakerQuietIcon } from '@radix-ui/react-icons';
import * as Tooltip from '@radix-ui/react-tooltip';

interface VideoPlayerProps {
    src: string;
    poster?: string;
}

export default function VideoPlayer({ src, poster }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(1);
    const [isMuted, setIsMuted] = useState(false);
    const [showControls, setShowControls] = useState(false);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const handleVolumeChange = (value: number[]) => {
        const newVolume = value[0];
        setVolume(newVolume);
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    return (
        <Box 
            style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', aspectRatio: '16/9', backgroundColor: 'black' }}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video 
                ref={videoRef}
                src={src} 
                poster={poster}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
                onEnded={() => setIsPlaying(false)}
                onClick={togglePlay}
            />
            
            {/* Play/Pause Overlay (Center) */}
            {!isPlaying && (
                <Flex align="center" justify="center" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                    <Box style={{ 
                        width: '64px', 
                        height: '64px', 
                        borderRadius: '50%', 
                        backgroundColor: 'rgba(255,255,255,0.2)', 
                        backdropFilter: 'blur(4px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                       <PlayIcon width="32" height="32" color="white" />
                    </Box>
                </Flex>
            )}

            {/* Bottom Controls Bar */}
            <Flex 
                align="center" 
                gap="4" 
                style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    right: 0, 
                    padding: '16px 20px', 
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    opacity: showControls || !isPlaying ? 1 : 0,
                    transition: 'opacity 0.3s ease',
                }}
            >
                <IconButton 
                    variant="ghost" 
                    color="gray" 
                    onClick={togglePlay} 
                    style={{ color: 'white' }}
                >
                    {isPlaying ? <PauseIcon width="24" height="24" /> : <PlayIcon width="24" height="24" />}
                </IconButton>

                <Flex align="center" gap="2" style={{ marginLeft: 'auto' }}>
                     <IconButton 
                        variant="ghost" 
                        color="gray" 
                        onClick={toggleMute} 
                        style={{ color: 'white' }}
                    >
                        {isMuted || volume === 0 ? <SpeakerOffIcon width="20" height="20" /> : <SpeakerLoudIcon width="20" height="20" />}
                    </IconButton>
                    
                    <Box style={{ width: '80px' }}>
                        <Slider 
                            value={[isMuted ? 0 : volume]} 
                            max={1} 
                            step={0.01} 
                            onValueChange={handleVolumeChange} 
                            size="1"
                            color="gray"
                            variant="surface"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Box>
    );
}
