from randomList import randomList

iList = randomList(20)

def bubbleSort(iList):
  '''冒泡排序'''
  if len(iList) <= 1:
    return iList
  for i in range(1, len(iList)):
    for j in range(0, len(iList) - 1):
      if iList[j] > iList[j + 1]:
        iList[j], iList[j + 1] = iList[j + 1], iList[j]
  return iList

if __name__ == "__main__":
  print("iList: %s" %iList)
  print(bubbleSort(iList))