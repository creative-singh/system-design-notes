// Strategy Interface
class SortingStrategy {
  sort(data) {
    throw new Error("Method 'sort()' must be implemented.");
  }
}

// Concrete Strategies
class BubbleSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("🔵 Using Bubble Sort Strategy");
    let arr = [...data];
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
}

class QuickSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("⚡ Using Quick Sort Strategy");
    const quickSort = (arr) => {
      if (arr.length <= 1) return arr;
      const pivot = arr[arr.length - 1];
      const left = arr.filter((x) => x < pivot);
      const right = arr.filter((x) => x > pivot);
      return [...quickSort(left), pivot, ...quickSort(right)];
    };
    return quickSort([...data]);
  }
}

class MergeSortStrategy extends SortingStrategy {
  sort(data) {
    console.log("🟢 Using Merge Sort Strategy");
    const mergeSort = (arr) => {
      if (arr.length <= 1) return arr;
      const mid = Math.floor(arr.length / 2);
      const left = mergeSort(arr.slice(0, mid));
      const right = mergeSort(arr.slice(mid));
      return merge(left, right);
    };

    const merge = (left, right) => {
      const result = [];
      while (left.length && right.length) {
        result.push(left[0] < right[0] ? left.shift() : right.shift());
      }
      return [...result, ...left, ...right];
    };

    return mergeSort([...data]);
  }
}

// Context
class SortingContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setSortingStrategy(strategy) {
    this.strategy = strategy;
  }

  performSort(data) {
    return this.strategy.sort(data);
  }
}

// Client
const numbers = [64, 25, 12, 22, 11];

const context = new SortingContext(new BubbleSortStrategy());
console.log("Sorted:", context.performSort(numbers));

context.setSortingStrategy(new QuickSortStrategy());
console.log("Sorted:", context.performSort(numbers));

context.setSortingStrategy(new MergeSortStrategy());
console.log("Sorted:", context.performSort(numbers));
