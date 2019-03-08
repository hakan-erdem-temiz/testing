import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";

it("shows a comment box", () => {
  // NOT needed i use enyzme instead of this part
  // const div = document.createElement("div");
  // ReactDOM.render(<App />, div);

  // expect(div.innerHTML).toContain("Comment Box");
  // expect(div).hasInstanceof(<App>);

  // //cleanup div
  // ReactDOM.unmountComponentAtNode(div);

  const wrapped = shallow(<App />);
  expect(wrapped.find(CommentBox).length).toEqual(1);
});
