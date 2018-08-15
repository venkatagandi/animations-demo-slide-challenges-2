import {
  trigger,
  state,
  transition,
  style,
  animate
} from "@angular/animations";

export let fade = trigger("fade", [
  state("void", style({ opacity: 0 })),
  transition(":enter,:leave", [animate(2000)])
]);

export let slide = trigger("slide", [
  transition(":enter", [
    animate(1000, style({ transform: "translateX(-10px)" }))
  ]),
  transition(":leave", [
    animate(225, style({ transform: "translateX(-100%)" }))
  ])
]);
