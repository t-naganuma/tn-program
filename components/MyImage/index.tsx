import Image from 'next/image';

type Props = {
  alt: string;
  width: number;
  height: number;
};

export function MyImage(value: Props) {
  const { alt, width, height } = value;

  return (
    <div className="relative">
      <Image
        src={'/tn.jpeg'}
        alt={alt}
        width={width}
        height={height}
        style={{
          borderRadius: '50%',
        }}
      />
    </div>
  );
}
