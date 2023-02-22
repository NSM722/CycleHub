export function convertToLowerCase(data) {
  return data.map(item => item.Model
    .toLowerCase()
    .replaceAll('-', ' '))
    .sort()
}

export function getBikeModelsCount(bikeData) {
  return bikeData.map(item => ({
    bikeType: item,
    count: bikeData
      .filter(bikeModel => bikeModel === item)
      .length
  }))

}

export function getUniqueBikes(bikeObjectsArray) {
  return bikeObjectsArray.filter((uniqueItem, index) => index === bikeObjectsArray
    .findIndex(element => element.bikeType === uniqueItem.bikeType && element.count === uniqueItem.count))
}


export function sortInDescendingOrder(uniqueBikesArray) {
  return uniqueBikesArray.sort((a, b) => b.count - a.count)
    .splice(0, 3)
}

