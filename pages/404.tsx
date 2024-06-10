import Image from 'next/image';
import IMG_NOTFOUND from '@/public/img-notfound.svg';

export default function NotFound() {
  return (
    <>
      <div>
        <div>
          <Image
            width={500}
            height={500}
            style={{ width: '500px', height: '500px' }}
            src={IMG_NOTFOUND}
            alt={'찾을 수 없는 페이지 이미지'}
          />
          <div>
            <p>{'찾을 수 없는 페이지입니다.'}</p>
            <p>{'요청하신 페이지가 사라졌거나,'}</p>
            <p>{'잘못된 경로를 이용하셨어요. :)'}</p>
          </div>
        </div>
      </div>
    </>
  );
}
