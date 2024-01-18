// Импортируем тип действия (action type) INPUT_TEXT из файла types.js
import { INPUT_TEXT } from "./types";

// Задаем начальное состояние редюсера
const initialState = {
  text: '', // Исходно у нас нет текста
}

// Объявляем сам редюсер - это функция, которая принимает текущее состояние и действие
export const textReducer = (state = initialState, action) => {
  // Выводим в консоль информацию о действии, которое пришло в редюсер
  console.log('input text Reducer >', action);

  // Используем конструкцию switch для обработки различных типов действий
  switch (action.type) {
    // Если тип действия совпадает с INPUT_TEXT, выполняем следующий код
    case INPUT_TEXT:
      // Возвращаем новый объект состояния, копируя все свойства из текущего состояния (spread оператор),
      // и обновляя свойство 'text' значением из действия (action.text)
      return {
        ...state,
        text: action.text,
      };

    // Если тип действия не совпадает с INPUT_TEXT, возвращаем текущее состояние без изменений
    default:
      return state;
  }
};
 
