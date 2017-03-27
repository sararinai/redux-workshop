import React, {Component} from 'react';
/**
 * Created by rafael on 27/03/17.
 */
class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav ariaLabel="Page navigation">
        <ul className="pagination">
          <li>
            <a href="#" ariaLabel="Previous">
              <span ariaHidden="true">&laquo;</span>
            </a>
          </li>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" ariaLabel="Next">
              <span ariaHidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;