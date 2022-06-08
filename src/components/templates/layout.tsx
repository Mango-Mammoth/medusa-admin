import React, { useEffect } from "react"
import { Toaster } from "react-hot-toast"
import Sidebar from "../organisms/sidebar"
import Topbar from "../organisms/topbar"
import { navigate } from "gatsby"
import { globalHistory } from "@reach/router"

const Layout: React.FC = ({ children }) => {

  // useEffect(() => {
  //   return globalHistory.listen((event) => {
  //     if (event.action === "PUSH") {
  //       window.parent.postMessage(event, "http://localhost:8080")
  //       setTimeout(() => {
  //         window.parent.postMessage(
  //           {
  //             height: document.body.scrollHeight,
  //           },
  //           "http://localhost:8080"
  //         )
  //       }, 100)
  //     }
  //   })
  // }, [])
  // useEffect(() => {
  //   window.addEventListener("message", handleMessage, false)
  //   setTimeout(() => {
  //     window.parent.postMessage(
  //       {
  //         height: document.body.scrollHeight,
  //       },
  //       "http://localhost:8080"
  //     )
  //   }, 100)
  //   return () => {
  //     window.removeEventListener("message", handleMessage, false)
  //   }
  // }, [])


  // const handleMessage = (event) => {
  //   console.log(event.data)
  //   if (event.origin !== "http://localhost:8080") {
  //     return
  //   }
  //   if (event.data.type === "navigate") {
  //     navigate(event.data.path)
  //     // window.parent.postMessage("done", "http://localhost:8080")
  //   }
  // }
  return (
    <div className="flex w-full inter-base-regular text-grey-90">
      <Toaster
        containerStyle={{
          top: 74,
          left: 24,
          bottom: 24,
          right: 24,
        }}
      />
      {/* <Sidebar /> */}
      <div className="flex flex-col flex-1">
        {/* <Topbar /> */}
        <div className="py-xlarge min-h-content overflow-y-auto">
          <main className="xsmall:mx-base small:mx-xlarge medium:mx-4xlarge large:max-w-7xl large:w-full h-full">
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}

export default Layout
