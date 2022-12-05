type ImageSizes = 400 | 700 | 1000 | 1300 | 1600 | 1920

interface Props {
  path: string
  fileName: string
  sizes?: string
  widths?: ImageSizes[]
  fallbackWidth?: ImageSizes
  alt: string
}

const Picture: React.FC<Props> = ({
  alt,
  sizes,
  widths = [400, 700, 1000, 1300, 1600, 1920],
  path,
  fileName,
  fallbackWidth = 1600,
}) => {
  const getPath = (width: number, extension: string) => {
    return `${path}/${extension}/${fileName}-${width}.${extension}`
  }

  const getSrcSet = (extension: 'webp' | 'jpg') => {
    let srcSet = ''
    widths.forEach(
      (w) => (srcSet = srcSet + `${getPath(w, extension)} ${w}w, `),
    )

    return srcSet
  }

  return (
    <picture>
      <source srcSet={getSrcSet('webp')} type="image/webp" sizes={sizes} />
      <source srcSet={getSrcSet('jpg')} type="image/jpeg" sizes={sizes} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={getPath(fallbackWidth, 'jpg')} alt={alt} />
    </picture>
  )
}

export default Picture
