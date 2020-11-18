const spaceId = "h8e1quxan381"
const environmentId = "master"
const accessToken = "RBJUGQqWzamvdQZVJSSTBq12rU_GuahAecA-WaIM7Ww"

const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`

const sectionTag = document.querySelector("section.feed")

console.log(url)

const grabData = function(){
  return fetch(url)
    .then(response => response.json())
    .then(data => {
      // store the assets somewhere
      const assets = data.includes.Asset

      // turn contentful data into something more usable
      return data.items.map(item => {
      let imgUrl = "img/p1.png"

      const imageId = item.fields.image.sys.id

      const imageData = assets.find(asset => {
        return asset.sys.id == imageId
      })

        if(imageData) {
          imgUrl = imageData.fields.file.url
        }
        
            if (imageUrl.startsWith('//')) {
            imageUrl = imageUrl.split('//').join('https://')
          }

        item.fields.image = imgUrl
        return item.fields
      })
    })
}

// run this grabData function on load

grabData().then(data => {
  // in here, do something with the returned data
  console.log(data)


  data.forEach(item => {
    sectionTag.innerHTML = sectionTag.innerHTML + `
    <section class="feed photos">
    						<a href="img/p5.png">${item.image}</a>
    						<a href="img/p6.png">${item.image}</a>
    						<a href="img/p7.png">${item.image}</a>
     </section>
    `
  })
})
