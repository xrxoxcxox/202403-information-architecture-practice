import { useState } from 'react'
import { EpisodeCard } from './EpisodeCard'

function App() {
  const [title, setTitle] = useState('Episode.1')
  const [publishedAt, setPublishedAt] = useState('2024-01-01')
  const [point, setPoint] = useState(50)
  const [isRead, setIsRead] = useState(false)
  const [isPurchased, setIsPurchased] = useState(false)

  return (
    <div className="grid min-h-svh grid-cols-[repeat(auto-fit,_minmax(theme('spacing.60'),_1fr))] gap-6 bg-slate-400 p-6">
      <div className="grid  place-items-center">
        <div className="max-w-96">
          <EpisodeCard
            title={title}
            publishedAt={publishedAt}
            point={point}
            isRead={isRead}
            isPurchased={isPurchased}
          />
        </div>
      </div>
      <div className="grid">
        <div className="grid content-start gap-y-4 self-center rounded bg-white p-6 shadow-lg">
          <div className="flex flex-col gap-y-1">
            <label htmlFor="title" className="text-sm">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(event.target.value)
              }
              className="rounded border border-slate-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="publishedAt" className="text-sm">
              Published at
            </label>
            <input
              id="publishedAt"
              type="date"
              value={publishedAt}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPublishedAt(event.target.value)
              }
              className="rounded border border-slate-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="point" className="text-sm">
              Point
            </label>
            <input
              id="point"
              type="number"
              value={point}
              min="0"
              disabled={isRead}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPoint(Number(event.target.value))
              }
              className="rounded border border-slate-300 px-2 py-1"
            />
          </div>
          <div className="flex flex-col items-start gap-y-1">
            <label htmlFor="is Read" className="text-sm">
              is Read
            </label>
            <input
              id="is Read"
              type="checkbox"
              checked={isRead}
              disabled={!isPurchased && point !== 0}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIsRead(event.target.checked)
              }
            />
          </div>
          <div className="flex flex-col items-start gap-y-1">
            <label htmlFor="isPurchased" className="text-sm">
              is Purchased
            </label>
            <input
              id="isPurchased"
              type="checkbox"
              checked={isPurchased}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setIsPurchased(event.target.checked)
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
