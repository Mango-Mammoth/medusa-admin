import { Router, globalHistory } from "@reach/router"
import { navigate } from "gatsby"
import React, { useEffect } from "react"
import { useHotkeys } from "react-hotkeys-hook"
import PrivateRoute from "../components/private-route"
import SEO from "../components/seo"
import Layout from "../components/templates/layout"
import Collections from "../domain/collections"
import Customers from "../domain/customers"
import Discounts from "../domain/discounts"
import GiftCards from "../domain/gift-cards"
import Oauth from "../domain/oauth"
import Orders from "../domain/orders"
import DraftOrders from "../domain/orders/draft-orders"
import Returns from "../domain/orders/returns"
import Swaps from "../domain/orders/swaps"
import Products from "../domain/products"
import Settings from "../domain/settings"
const adminHost = process.env.GATSBY_ADMIN_HOST
const IndexPage = () => {
  useEffect(() => {
    return globalHistory.listen((event) => {
      if (event.action === "PUSH" && window.parent.origin === adminHost) {
        console.log({ historyChange: event })
        window.parent.postMessage(event, adminHost)
      }
    })
  }, [])
  useEffect(() => {
    window.addEventListener("message", handleMessage, false)
    return () => {
      window.removeEventListener("message", handleMessage, false)
    }
  }, [])

  const handleMessage = (event) => {
    if (event.origin !== adminHost) {
      return
    }
    if (event.data.type === "navigate") {
      console.log({ navigate: event })
      navigate(event.data.path)
    }
  }

  useHotkeys("g + o", () => navigate("/a/orders"))
  useHotkeys("g + p", () => navigate("/a/products"))
  return (
    <Layout>
      <SEO title="Medusa" />
      <Router basepath="/store-admin/a" className="h-full">
        <PrivateRoute path="oauth/:app_name" component={Oauth} />
        <PrivateRoute path="products/*" component={Products} />
        <PrivateRoute path="collections/*" component={Collections} />
        <PrivateRoute path="gift-cards/*" component={GiftCards} />
        <PrivateRoute path="orders/*" component={Orders} />
        <PrivateRoute path="draft-orders/*" component={DraftOrders} />
        <PrivateRoute path="returns" component={Returns} />
        <PrivateRoute path="swaps" component={Swaps} />
        <PrivateRoute path="discounts/*" component={Discounts} />
        <PrivateRoute path="customers/*" component={Customers} />
        <PrivateRoute path="settings/*" component={Settings} />
      </Router>
    </Layout>
  )
}

export default IndexPage
