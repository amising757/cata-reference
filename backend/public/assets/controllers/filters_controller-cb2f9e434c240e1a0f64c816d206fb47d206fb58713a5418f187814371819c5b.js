import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  autoSubmit(event) {
    // Auto-submit form when filters change
    this.element.requestSubmit()
  }
};
