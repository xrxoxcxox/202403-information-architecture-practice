import { EpisodeCard } from './EpisodeCard'

function App() {
  return (
    <div className="grid min-h-svh place-items-center bg-slate-400">
      <div className="grid w-[22.5rem]">
        <EpisodeCard
          title="Episode.5"
          date="2024/01/05"
          point={50}
          isRead
          isPurchased
        />
        <EpisodeCard
          title="Episode.4"
          date="2024/01/04"
          point={50}
          isPurchased
        />
        <EpisodeCard title="Episode.4" date="2024/01/03" point={50} />
        <EpisodeCard title="Episode.2" date="2024/01/02" point={0} isRead />
        <EpisodeCard title="Episode.1" date="2024/01/01" point={0} />
      </div>
    </div>
  )
}

export default App
