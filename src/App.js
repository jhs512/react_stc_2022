import { Chip } from "@mui/material";

function App() {
  return (
    <>
      <div className="flex-1 flex items-center justify-center">
        <div>
          <Chip
            label={
              <span>
                <i className="fa-solid fa-bell"></i> Chip Filled
              </span>
            }
            className="!pt-1"
          />
        </div>
      </div>
    </>
  );
}

export default App;
