type Props = {
  title: string
  publishedAt: string
  point: number
  isRead?: boolean
  isPurchased?: boolean
}

export function EpisodeCard({
  title = 'No title',
  publishedAt = 'Undefined',
  point,
  isRead = false,
  isPurchased = false,
}: Props) {
  const background = isRead ? 'bg-slate-200' : 'bg-white'
  const pointColor =
    point === 0 || isPurchased
      ? 'border border-blue-600 text-blue-600'
      : 'bg-blue-600 text-white'
  const pointLabel =
    point === 0 ? 'Free' : isPurchased ? 'Purchased' : `${point} pt`

  return (
    <div className={`grid grid-cols-3 gap-x-4 px-4 py-2 ${background}`}>
      <img
        src="https://via.placeholder.com/320x180"
        alt=""
        width={160}
        height={90}
        className="col-start-1 col-end-2 h-auto w-full rounded bg-slate-100"
      />
      <div className="col-start-2 col-end-4 flex items-center">
        <div className="flex flex-grow flex-col">
          <span className="text-sm text-neutral-900">{title}</span>
          <span className="text-xs text-neutral-500">{publishedAt}</span>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs tabular-nums ${pointColor}`}
        >
          {pointLabel}
        </span>
      </div>
    </div>
  )
}
