/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the resto that has been added', async () => {
    favoriteResto.putRestoDB({ id: 1 });
    favoriteResto.putRestoDB({ id: 2 });

    expect(await favoriteResto.getRestoDB_Id(1))
      .toEqual({ id: 1 });
    expect(await favoriteResto.getRestoDB_Id(2))
      .toEqual({ id: 2 });
    expect(await favoriteResto.getRestoDB_Id(3))
      .toEqual(undefined);
  });

  it('should refuse a movie from being added if it does not have the correct property', async () => {
    favoriteResto.putRestoDB({ aProperty: 'property' });

    expect(await favoriteResto.getAllRestoDB())
      .toEqual([]);
  });

  it('can return all of the movies that have been added', async () => {
    favoriteResto.putRestoDB({ id: 1 });
    favoriteResto.putRestoDB({ id: 2 });

    expect(await favoriteResto.getAllRestoDB())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should remove favorite movie', async () => {
    favoriteResto.putRestoDB({ id: 1 });
    favoriteResto.putRestoDB({ id: 2 });
    favoriteResto.putRestoDB({ id: 3 });

    await favoriteResto.deleteRestoById(1);

    expect(await favoriteResto.getAllRestoDB())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should handle request to remove a movie even though the movie has not been added', async () => {
    favoriteResto.putRestoDB({ id: 1 });
    favoriteResto.putRestoDB({ id: 2 });
    favoriteResto.putRestoDB({ id: 3 });

    await favoriteResto.deleteRestoById(4);

    expect(await favoriteResto.getAllRestoDB())
      .toEqual([
        { id: 1 },
        { id: 2 },
        { id: 3 },
      ]);
  });
};

export { itActsAsFavoriteRestoModel };
