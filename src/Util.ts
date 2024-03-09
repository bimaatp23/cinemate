export default class Util {
    private colorList: string[] = [
        '#f44336', // Red
        '#e91e63', // Pink
        '#9c27b0', // Purple
        '#673ab7', // Deep Purple
        '#3f51b5', // Indigo
        '#2196f3', // Blue
        '#009688', // Teal
        '#4caf50', // Green
        '#ff9800', // Orange
        '#ff5722', // Deep Orange
        '#795548', // Brown
        '#9e9e9e', // Grey
        '#607d8b'  // Blue Grey
    ]

    randomColor(): string {
        return this.colorList[Math.floor(Math.random() * this.colorList.length)]
    }
}