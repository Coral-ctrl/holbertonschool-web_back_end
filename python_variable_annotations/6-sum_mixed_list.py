#!/usr/bin/env python3
"""Module that provided function sum_mixed_list."""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """returns sum of a list of integers and floats"""
    return sum(mxd_lst)
