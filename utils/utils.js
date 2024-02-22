// function createIntensityLevel(minIntensity, maxIntensity) {
//   // Create root element
//   const rootElement = document.getElementById("intensity-level")

//   // Create main container
//   const mainContainer = document.createElement("div")
//   mainContainer.style.display = "flex"
//   mainContainer.style.alignItems = "center"
//   mainContainer.style.gap = "0.5rem"

//   // Add Intensity Level text
//   mainContainer.textContent = `Intensity Level: ${minIntensity}~${maxIntensity}`

//   // Create tooltip container
//   const tooltipContainer = document.createElement("div")
//   tooltipContainer.style.position = "relative"
//   tooltipContainer.style.fontFamily = "sans-serif"

//   // Create custom question mark div
//   const questionMarkDiv = document.createElement("div")
//   questionMarkDiv.className = "intensity-tooltip custom-questionmark"

//   // Create intensity modal
//   const intensityModal = document.createElement("div")
//   intensityModal.className = "intensity-modal"

//   // Create image element in the modal
//   const modalImage = document.createElement("img")
//   modalImage.style.width = "100%" // Updated width style
//   modalImage.src =
//     "https://cdn.shopify.com/s/files/1/0579/8379/5374/files/Screenshot_2024-01-10_at_12.19.56.png?v=1704919961"
//   modalImage.alt = ""

//   // Create text content in the modal
//   const modalText = document.createElement("div")
//   modalText.innerHTML = `
//     The Intensity Level represents both Minimum Intensity and Maximum Intensity.
//     <br />
//     <b>Note:</b> Intensity level is a relative indicator that can be perceived differently by each user.
//   `

//   // Append elements to the modal
//   intensityModal.appendChild(modalImage)
//   intensityModal.appendChild(modalText)

//   // Append elements to the tooltip container
//   tooltipContainer.appendChild(questionMarkDiv)
//   tooltipContainer.appendChild(intensityModal)

//   // Append tooltip container to the main container
//   mainContainer.appendChild(tooltipContainer)

//   // Append main container to the root element
//   rootElement.appendChild(mainContainer)
// }

function createIntensityLevel(minIntensity, maxIntensity) {
  const root = document.getElementById("intensity-level")
  const min = document.createElement("span")
  min.textContent = `Intensity Level: ${minIntensity} ~ ${maxIntensity}`
  root.appendChild(min)

  const help = document.createElement("span")
  help.classList.add("material-symbols-outlined")
  help.classList.add("show-intensity-modal")
  help.textContent = "help"
  root.appendChild(help)

  const modal = document.createElement("div")
  modal.classList.add("intensity-modal")
  root.appendChild(modal)

  const img = document.createElement("img")

  img.src =
    "https://cdn.shopify.com/s/files/1/0579/8379/5374/files/Screenshot_2024-01-10_at_12.19.56.png?v=1704919961"
  img.alt = "intensity-level"
  modal.appendChild(img)

  const div = document.createElement("div")
  div.textContent =
    "The Intensity Level represents both Minimum Intensity and Maximum Intensity."
  modal.appendChild(div)

  const note = document.createElement("div")
  note.style.fontSize = "0.9rem"
  note.innerHTML =
    "<b>Note</b>: Intensity level is a relative indicator that can be perceived differently by each user."
  modal.appendChild(note)
}
