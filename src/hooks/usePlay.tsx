import { useRecoilState, useSetRecoilState } from 'recoil';
import { audioState, musicArtistState, musicIdState, musicNameState, playState } from 'src/store/atom';

type ReturnType = [boolean, number, (music: any) => void, () => void, string, string];

const usePlay = (): ReturnType => {
  const [play, setPlay] = useRecoilState(playState);
  const [musicId, setMusicId] = useRecoilState(musicIdState);
  const [musicName, setMusicName] = useRecoilState(musicNameState);
  const [musicArtist, setMusicArtist] = useRecoilState(musicArtistState);

  const setAudio = useSetRecoilState(audioState);

  const start = (music: any) => {
    setMusicId(music.musicId);
    setAudio(music.musicUrl);
    setMusicName(music.musicName);
    setMusicArtist(music.musicArtist);
    setPlay(true);
  };

  const stop = () => {
    setPlay(false);
  };

  return [play, musicId, start, stop, musicName, musicArtist];
};

export default usePlay;
