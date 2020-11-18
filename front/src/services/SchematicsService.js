import api from "@/api"
import {SCHEMATICS} from "../api/routes";

export default {
  getSchematics() {
    return api.get(SCHEMATICS.GET)
  }
}
