import { LitElement, html, property, css, query } from 'lit-element';
import '@material/mwc-top-app-bar';
import '@material/mwc-icon-button';
import '@material/mwc-drawer';
import '@material/mwc-icon';
export class BeakerApp extends LitElement {
  @property({ type: String }) title = 'My app';
  static styles = css`
    .content-container {
      padding: 30px;
    }
  `;
  @query('mwc-drawer') _myDrawer: any;

  render() {
    return html`
      <mwc-drawer hasHeader type="dismissible" open>
        <span slot="title">Drawer Title</span>
        <span slot="subtitle">subtitle</span>
        <div class="content-container">
          <p>Drawer content!</p>
          <mwc-icon-button icon="gesture"></mwc-icon-button>
          <mwc-icon-button icon="gavel"></mwc-icon-button>
        </div>
        <div slot="appContent">
          <mwc-top-app-bar>
            <mwc-icon-button
              slot="navigationIcon"
              icon="menu"
              @click="${this.handleClick}"
            ></mwc-icon-button>
            <div slot="title">Title</div>
          </mwc-top-app-bar>
          <div>
            <p>Main Content!</p>
          </div>
        </div>
      </mwc-drawer>
    `;
  }

  handleClick(): void {
    const dr = this._myDrawer;
    dr.open = !dr.open;
  }
}
