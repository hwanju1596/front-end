import { merge } from 'lodash';
import Card from "./Card";
import CssBaseLine from "./CssBaseLine";

export default function ComponentsOverrides(theme) {
    return merge(
      Card(theme),
      CssBaseLine(theme)
    );
  }
  