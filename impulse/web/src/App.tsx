import { ChatTeardropDots } from 'phosphor-react'
import { useState } from 'react'
import { Widget } from './components/Widget'
import { Popover } from '@headlessui/react'


export function App() {
  // const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  // function toggleWidgetVisibility() {
  //   setIsWidgetOpen(!isWidgetOpen)
  // }

  return (
    <Popover className='absolute bottom-5 right-5'>
      {/* {isWidgetOpen ? <p>Hello world</p> : null} */}
      {/* {isWidgetOpen && <p>Hello world</p>} */}
      {/* onClick={toggleWidgetVisibility} */}
      <Popover.Panel>Hello world</Popover.Panel>
      <Popover.Button  className='bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group'>
      <ChatTeardropDots className="w-6 h-6 " />
      <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear'><span className='pl-2'>Feedback</span></span>
    </Popover.Button>
    </Popover>
    )
}



// interface ButtonProps {
//   text?: string;

// }

// function Button(props: ButtonProps) {
//   return <button className="bg-violet-500 px-4 h-10 rounded text-violet-50 hover:bg-violet-800 transition-colors">{props.text ?? 'Default'}</button>
// }
// function App() {

//   return (
//     <>
//     <h1>hello world</h1>
//     <div className="flex gap-2">
//     <Button text="Enviar"/>
//     <Button text="Cancelar"/>
//     <Button />
//     </div>
//     </>
//   )
// }

// export default App
