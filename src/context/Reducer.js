export const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === "CLOSE_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: false,
    };
  }
  if (type === "OPEN_SIDEBAR") {
    return {
      ...state,
      isSidebarOpen: true,
    };
  }
  if (type === "DELETE_NOTE") {
    const filteredNotes = state.noteList.filter((note) => note.id !== payload);
    return {
      ...state,
      noteList: filteredNotes,
    };
  }
  if (type === "CLEAR_PAGE") {
    return {
      ...state,
      writing: true,
    };
  }
  if (type === "FILL_PAGE") {
    return {
      ...state,
      writing: false,
    };
  }
  if (type === "SET_TITLE_VALUE") {
    return {
      ...state,
      titleValue: payload,
    };
  }
  if (type === "SET_CATEG_VALUE") {
    return {
      ...state,
      categValue: payload,
    };
  }
  if (type === "SET_CONTENT_VALUE") {
    return {
      ...state,
      contentValue: payload,
    };
  }
  if (type === "SAVE_NOTE") {
    // console.log("finding", payload);
    if (state.editId !== null) {
      const edited = state.noteList.map((note) => {
        if (note.id === state.editId) {
          return {
            ...note,
            noteTitle: state.titleValue,
            noteCategory: state.categValue,
            noteContent: state.contentValue,
            createdAt: `${payload}(edited)`,
          };
        } else {
          return { ...note };
        }
      });
      return {
        ...state,
        noteList: edited,
        titleValue: "",
        categValue: "",
        contentValue: "",
        idEditing: false,
        editId: null,
      };
    } else {
      const { titleValue, categValue, contentValue } = state;
      if (titleValue !== "" && categValue !== "" && contentValue !== "") {
        const noteObj = {
          id: new Date().getTime().toString(),
          noteTitle: titleValue,
          noteCategory: categValue,
          noteContent: contentValue,
          createdAt: payload,
        };

        return {
          ...state,
          noteList: [...state.noteList, noteObj],
          titleValue: "",
          categValue: "",
          contentValue: "",
        };
      } else {
        return { ...state };
      }
    }
  }
  if (type === "SET_CATEGORY_LIST") {
    const categoryArr = state.noteList.map((note) => note.noteCategory);
    const categoriesSet = Array.from(new Set(["All notes", ...categoryArr]));
    return {
      ...state,
      categories: categoriesSet,
    };
  }
  if (type === "FILTER_NOTES") {
    if (payload == "All notes") {
      return {
        ...state,
        filteredNotes: state.noteList,
      };
    } else {
      const filtered = state.noteList.filter(
        (note) => note.noteCategory === payload
      );
      return {
        ...state,
        filteredNotes: filtered,
      };
    }
  }
  if (type === "EDIT_NOTE") {
    const target = state.noteList.find((note) => note.id === payload);
    return {
      ...state,
      isNoteEditing: true,
      editId: target.id,
      titleValue: target.noteTitle,
      categValue: target.noteCategory,
      contentValue: target.noteContent,
    };
  }
};
