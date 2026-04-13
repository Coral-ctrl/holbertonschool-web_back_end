#!/usr/bin/env python3
"""Module providing a simple helper function for pagination index calculation."""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """Return a tuple containing the start and end indexes for a given page."""
    start_index = (page - 1) * page_size
    end_index = page * page_size
    return (start_index, end_index)
