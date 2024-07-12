import { createRoot } from 'react-dom/client'

const App = () => <div>Hello world</div>

const reactRoot = createRoot(document.getElementById('root')!)
reactRoot.render(<App/>)