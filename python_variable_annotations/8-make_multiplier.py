#!/usr/bin/env python3
"""Module that provides function make_multiplier."""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """returns a function that multiplies a float by multiplier"""
    def multiplier_func(x: float) -> float:
        """Return x multiplied by the outer multiplier."""
        return x * multiplier
    return multiplier_func
