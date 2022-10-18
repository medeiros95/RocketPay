import "./css/index.css"

const ccBgColor01 = document.querySelector(".cc-bg svg >g g:nth-child(1) path")
const ccBgColor02 = document.querySelector(".cc-bg svg >g g:nth-child(2) path")
const ccBgColor03 = document.querySelector(".cc-bg svg >g g:nth-child(2) path")
const ccLogo = document.querySelector(".cc-logo span:nth-child(2) img")
ccBgColor01.setAttribute("fill", "Green")
ccBgColor02.setAttribute("fill", "Blue")

function setCardType(type) {
  const colors = {
    visa: ["#436D99", "#2D57F2"],
    masterCard: ["#DF9F29", "#C69347"],
    elo: ["#FFCD1C", "#535353"],
    default: ["Black", "Gray"],
  }
  ccBgColor01.setAttribute("fill", colors[type][0])
  ccBgColor02.setAttribute("fill", colors[type][1])
  ccBgColor03.setAttribute("fill", colors[type][2])
  ccLogo.setAttribute("src", `cc-${type}.svg`)
}

setCardType("elo")

globalThis.setCardType = setCardType
