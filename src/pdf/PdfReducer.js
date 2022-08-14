export const ADD_ELEMENT = "APP/PDF/ADD_ELEMENT";
export const UPDATE_ELEMENT = "APP/PDF/UPDATE_ELEMENT";
export const SELECT_ELEMENT = "APP/PDF/SELECT_ELEMENT";
export const DELETE_ELEMENT = "APP/PDF/DELETE_ELEMENT";

export const NO_ELEMENT_SELECTED = "NO_ELEMENT_SELECTED";

export const initialState = {
  elements: {},
  selectedElement: NO_ELEMENT_SELECTED,
  stage: null,
};
export const deleteElement = (key) => ({
  type: DELETE_ELEMENT,
  key,
});
export const addElement = (element) => ({
  type: ADD_ELEMENT,
  element,
});

export const updateElement = (element, key) => ({
  type: UPDATE_ELEMENT,
  element,
  key,
});

export const selectElement = (key) => ({
  type: SELECT_ELEMENT,
  key,
});

export const pdfReducer = (state = initialState, action) => {
  if (action.type === ADD_ELEMENT) {
    state.elements[action.element.id] = action.element;
    return {
      ...state,
      elements: state.elements,
    };
  }
  if (action.type === UPDATE_ELEMENT) {
    state.elements[action.key] = action.element;
    return {
      ...state,
      elements: state.elements,
    };
  }
  if (action.type === SELECT_ELEMENT) {
    return {
      ...state,
      elements: state.elements,
      selectedElement: action.key,
    };
  }
  if (action.type == DELETE_ELEMENT) {
    delete state.elements[action.key];
    return {
      ...state,
      elements: state.elements,
      selectedElement: NO_ELEMENT_SELECTED,
    };
  }
};
