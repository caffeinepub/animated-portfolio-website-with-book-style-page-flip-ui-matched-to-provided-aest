import { AnimatedBackground } from './components/background/AnimatedBackground';
import { BookNavigator } from './components/book/BookNavigator';

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatedBackground />
      <main className="relative z-10 flex min-h-screen items-center justify-center p-4 md:p-8">
        <BookNavigator />
      </main>
    </div>
  );
}
