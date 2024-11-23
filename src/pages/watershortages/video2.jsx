import { useVideoTexture } from "@react-three/drei";
import { useCallback, useState } from "react";

const Video2 = (props) => {
  const [pause, setPause] = useState(false);

  const texture = useVideoTexture("/videos/video_water2.mp4", {
    muted: false,
    loop: true,
    start: false,
  });

  const handleVideo = useCallback(
    (e) => {
      e.stopPropagation();
      pause ? texture.image.play() : texture.image.pause();
      setPause(!pause);
    },
    [pause, texture, setPause]
  );

  return (
    <mesh {...props} onDoubleClick={handleVideo}>
      <planeGeometry args={[2, 1]} />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  );
};
export default Video2;
