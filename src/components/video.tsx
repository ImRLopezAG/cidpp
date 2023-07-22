interface videoProps {
  keyframe: string
  title: string
}

export const Video = ({ keyframe, title }: videoProps): JSX.Element => {
  return (
    <div className='flex flex-col justify-center items-center mb-4 border-2 border-[#0071bc] rounded-md p-2'>
      <iframe
        width='100%'
        height='315'
        src={`https://www.youtube.com/embed/${keyframe}`}
        title={title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      />
      <h2>{title}</h2>
    </div>
  )
}
