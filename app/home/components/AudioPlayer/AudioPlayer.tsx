"use client";

import { useState, useRef } from "react";
import { Play, Pause, Mic } from "lucide-react";
import styles from "./AudioPlayer.module.css";

interface AudioPlayerProps {
  src: string;
  avatarUrl: string;
}

export const AudioPlayer = ({ src, avatarUrl }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState("00:00");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime;
      const duration = audioRef.current.duration;
      if (!isNaN(duration)) {
        setProgress((current / duration) * 100);
      }

      const mins = Math.floor(current / 60);
      const secs = Math.floor(current % 60);
      setCurrentTime(
        `${mins.toString().padStart(2, "0")}:${secs
          .toString()
          .padStart(2, "0")}`
      );
    }
  };

  // Função para avançar/voltar o áudio ao arrastar a bolinha
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newProgress = Number(e.target.value);
    if (audioRef.current) {
      const duration = audioRef.current.duration;
      const newTime = (newProgress / 100) * duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress);
    }
  };

  return (
    <div className={styles.player}>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      />

      <button className={styles.playButton} onClick={togglePlay}>
        {isPlaying ? (
          <Pause size={20} fill="currentColor" />
        ) : (
          <Play size={20} fill="currentColor" />
        )}
      </button>

      <div className={styles.progressContainer}>
        <div className={styles.metaInfo}>
          <span>V_REPORT_ENCRYPTED</span>
          <span>{currentTime} / 00:45</span>
        </div>

        <input
          type="range"
          className={styles.rangeInput}
          value={progress}
          onChange={handleProgressChange}
          style={{
            background: `linear-gradient(to right, #FFF ${progress}%, rgba(255,255,255,0.1) ${progress}%)`,
            // Adiciona o brilho na linha branca conforme ela avança
            filter: `drop-shadow(0 0 5px rgba(255, 255, 255, ${
              progress > 0 ? 0.8 : 0
            }))`,
          }}
        />

        <div className={styles.metaInfo}>
          <span>ID: 0x882_SYS</span>
          <span>STATUS: VERIFIED</span>
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Mic size={14} style={{ color: "rgba(255,255,255,0.2)" }} />
        <img src={avatarUrl} alt="User" className={styles.avatar} />
      </div>
    </div>
  );
};
