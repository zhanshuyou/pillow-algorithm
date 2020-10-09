import random

def randomList(n):
  iList = []
  for i in range(n):
    iList.append(random.randrange(100))
  return iList

if __name__ == "__main__":
  print(randomList(10))
