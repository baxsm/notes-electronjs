import { FC, useEffect, useState } from 'react'
import { FiMaximize, FiMinimize, FiMinus, FiX } from 'react-icons/fi'

const DraggableTopBar: FC = () => {
  const [isMaximized, setIsMaximized] = useState(false)

  const minimizeWindow = (): void => {
    window.context.minimize()
  }

  const maximizeRestoreWindow = (): void => {
    window.context.maximize()
  }

  const closeWindow = (): void => {
    window.context.close()
  }

  return (
    <header className="absolute inset-0 h-10 bg-[#111] flex items-center justify-between p-2">
      <h5 className="text-xs">Notes Application</h5>
      <div className="flex items-center gap-1">
        <button className="p-2 rounded-md hover:bg-[#222] duration-300" onClick={minimizeWindow}>
          <FiMinus className="text-sm" />
        </button>
        <button
          className="p-2 rounded-md hover:bg-[#222] duration-300"
          onClick={maximizeRestoreWindow}
        >
          {/* {isMaximized ? <FiMinimize className="text-sm" /> : <FiMaximize className="text-sm" />} */}
          <FiMaximize className="text-sm" />
        </button>
        <button className="p-2 rounded-md hover:bg-red-500/40 duration-300" onClick={closeWindow}>
          <FiX className="text-sm" />
        </button>
      </div>
    </header>
  )
}

export default DraggableTopBar
