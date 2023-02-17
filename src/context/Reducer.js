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
  if (type === "CLOSE_ALERT") {
    return {
      ...state,
      showAlert: false,
      alertMsg: "",
      alertBg: "",
    };
  }
  if (type === "DELETE_NOTE") {
    const filteredNoteList = state.noteList.filter(
      (note) => note.id !== payload
    );

    if (state.noteSearched) {
      const filteredSearchedNoteList = state.searchedNoteArr.filter(
        (note) => note.id !== payload
      );
      if (filteredSearchedNoteList.length < 1) {
        return {
          ...state,
          noteList: filteredNoteList,
          searchedNoteArr: filteredSearchedNoteList,
          searchBarValue: "",
          noteSearched: false,
          showAlert: true,
          alertMsg: "Note deleted successfully",
          alertBg: "#f5c2c7",
        };
      }
      return {
        ...state,
        noteList: filteredNoteList,
        searchedNoteArr: filteredSearchedNoteList,
        showAlert: true,
        alertMsg: "Note deleted successfully",
        alertBg: "#f5c2c7",
      };
    }

    return {
      ...state,
      noteList: filteredNoteList,
      showAlert: true,
      alertMsg: "Note deleted successfully",
      alertBg: "#f5c2c7",
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
            noteTitle: state.titleValue.trim(),
            noteCategory: state.categValue.trim(),
            noteContent: state.contentValue.trim(),
            createdAt: `${payload}(edited)`,
          };
        } else {
          return { ...note };
        }
      });
      return {
        ...state,
        noteList: edited,
        filteredNotes: [],
        titleValue: "",
        categValue: "",
        contentValue: "",
        idEditing: false,
        editId: null,
        showAlert: true,
        alertMsg: "Note edited",
        alertBg: "#70db70",
      };
    } else {
      const { titleValue, categValue, contentValue } = state;
      if (titleValue !== "" && categValue !== "" && contentValue !== "") {
        const noteObj = {
          id: new Date().getTime().toString(),
          noteTitle: titleValue.trim(),
          noteCategory: categValue.trim(),
          noteContent: contentValue.trim(),
          createdAt: payload,
        };

        return {
          ...state,
          noteList: [...state.noteList, noteObj],
          titleValue: "",
          categValue: "",
          contentValue: "",
          showAlert: true,
          alertMsg: "New note added",
          alertBg: "#70db70",
        };
      } else {
        return { ...state };
      }
    }
  }
  if (type === "CHECK_VALIDATION") {
    console.log("validation checked");
    if ((state.titleValue && state.categValue && state.contentValue) == "") {
      return {
        ...state,
        showAlert: true,
        alertMsg: "Provide proper information to save note.",
        alertBg: "#f5c2c7",
      };
    }
    return {
      ...state,
    };
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
    if (payload === "All notes") {
      return {
        ...state,
        filteredNotes: [],
        areNotesFiltered: false,
        showAlert: true,
        alertMsg: `Showing all notes`,
        alertBg: "#ddebff",
      };
    } else {
      const filtered = state.noteList.filter(
        (note) => note.noteCategory === payload
      );
      const payLoadForMsg =
        payload.length > 15
          ? payload.split("").slice(0, 15).join("").trim() + "..."
          : payload;
      return {
        ...state,
        filteredNotes: filtered,
        areNotesFiltered: true,
        showAlert: true,
        alertMsg: `Showing notes of category: ${payLoadForMsg}`,
        alertBg: "#70db70",
      };
    }
  }
  if (type === "FILTER_NOTES_ON_DELETE") {
    if (payload === "All notes") {
      return {
        ...state,
        filteredNotes: [],
        showAlert: true,
        alertMsg: `Note deleted successfully`,
        alertBg: "#f5c2c7",
      };
    } else {
      const filtered = state.noteList.filter(
        (note) => note.noteCategory === payload
      );
      return {
        ...state,
        filteredNotes: filtered,
        showAlert: true,
        alertMsg: `Note deleted successfully.`,
        alertBg: "#f5c2c7",
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
  if (type === "SEARCH_BAR_VALUE_CHANGE") {
    return {
      ...state,
      searchBarValue: payload,
    };
  }
  if (type === "SEARCH_NOTE") {
    if (payload === "") {
      return {
        ...state,
        showAlert: true,
        alertMsg: `Enter a value to search`,
        alertBg: "#f5c2c7",
      };
    }
    const searchedNotes = state.noteList.filter(
      (note) => note.noteTitle === payload
    );
    if (searchedNotes.length < 1) {
      return {
        ...state,
        showAlert: true,
        noteSearched: false,
        alertMsg: `No note found with title: '${payload}'`,
        alertBg: "#f5c2c7",
        searchBarValue: "",
      };
    }
    return {
      ...state,
      searchedNoteArr: searchedNotes,
      noteSearched: true,
    };
  }
  if (type === "CLEAR_SEARCH") {
    return {
      ...state,
      searchedNoteArr: [],
      noteSearched: false,
      searchBarValue: "",
    };
  }

  if (type === "SET_NOTES_BACK") {
    return {
      ...state,
      filteredNotes: [],
    };
  }
};
